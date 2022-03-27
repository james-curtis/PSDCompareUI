import requests from "./axios";
export const SearchCompareLogWithPage = (data) => requests.post('/SearchCompareLogWithPage', data)