import { useMutation } from 'react-query';
import axios from 'axios';

const apiUrl = process.env.NEXT_PUBLIC_API_URL

async function ticketValidate(ticketData) {
    try {
        const headers = {
            'accept': 'application/json',
        };
        const response = await axios.post(`${apiUrl}/api/v1/tickets/validate`, ticketData, { headers });
        return response.data;
    } catch (error) {
        throw error;
    }
}

export function useTicketValidateMutation(onSuccess, onError){
    return useMutation(ticketValidate, {
        onSuccess,
        onError
    });
}