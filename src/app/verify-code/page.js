'use client';

import {styles} from './useStyle';
import PinCodePanel from "../../app/component/PinCodePanel/PinCodePanel";
import Modal from "../../app/component/Modal/Modal";
import {useEffect, useState} from "react";
import {useTicketValidateMutation} from "../api/mutations";
import {useSearchParams, useRouter} from "next/navigation";
export const dynamic = "force-dynamic";

export default function VerifyCode() {
    const correctCodeText = '사장님의 식권 사용 코드를 입력해 주세요.'
    const incorrectCodeText = '잘못된 코드입니다. 다시 입력해 주세요.'
    let searchParams = useSearchParams()
    let ticket_id = searchParams.get('ticket_id') || '';
    ticket_id = ticket_id.replaceAll(' ', '+');
    const [subText, setSubText] = useState(correctCodeText);
    const [isValid, setIsValid] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState({ title: '', message: '' });
    const [shake, setShake] = useState(false);

    const router = useRouter();

    const handleTicketValidateSuccess = (data) => {
        if(!data.success) {
            /*올바르지 않은 사용 코드 입력*/
            setIsValid(false);
            setSubText(incorrectCodeText);
            setShake(true);
            setTimeout(() => setShake(false), 500);
        } else {
            /*일단 존재하는 코드*/
            if(data.data?.is_valid) {
                /*유효한 코드*/
                router.push("/home");
            } else {
                /*유효하지 않은 코드*/
                const message = data.data?.reason ? data.data?.reason : "이미 사용된 쿠폰입니다."
                handleNetworkSuccess({ title: '인증 실패', message: message, icon: '/icon/ic_warning.svg' })
            }
        }
    };

    const handleTicketValidateError = (error) => {
        // 티켓 유효성 검사 실패 후 처리할 로직
        console.error('네트워크 연결 실패', error);
    };

    const handleNetworkSuccess = (modalData) => {
        setModalContent({ title: modalData.title, message: modalData.message, icon: modalData.icon});
        setSubText(correctCodeText)
        setIsModalOpen(true);
        setIsValid(true);
    }

    const {
        mutate: ticketValidateMutation,
    } = useTicketValidateMutation(
        handleTicketValidateSuccess,
        handleTicketValidateError
    )
    const handleCodeComplete = (code) => {
        ticketValidateMutation({
          hashed_ticket_id : ticket_id,
          password : code
        })
    };

    const handleConfirm = () => {
        setIsModalOpen(false);
    };
    return (
        <div className="justify-items-center min-h-screen">
            <main className="flex flex-col row-start-2 items-center">
                <div style={{ ...styles.mainText, ...styles.marginTopMain}}>
                    사용 코드 입력
                </div>
                <div style={{ ...styles.subText, ...styles.marginTopSub, ...(!isValid ? styles.failText : {})}}>
                    {subText}
                </div>
                <div style={styles.marginTopPinCode}>
                    <PinCodePanel
                        onComplete={handleCodeComplete}
                        isValid={isValid}
                        shake={shake}
                    />
                    <Modal
                        isOpen={isModalOpen}
                        title={modalContent.title}
                        message={modalContent.message}
                        onConfirm={handleConfirm}
                        icon={modalContent.icon}
                    />
                </div>
            </main>
        </div>
    );
}