import React from 'react'

export const useParams = () => {
    const params = new URLSearchParams(window.location.search);
    return Object.fromEntries(params.entries())
}
