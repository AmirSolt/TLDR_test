import { SSE } from 'sse.js'








function scrollToBottom() {
    setTimeout(function () {
        scrollToDiv.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' })
    }, 100)
}






const handleSubmit = async () => {
    loading = true
    chatMessages = [...chatMessages, { role: 'user', content: query }]

    const eventSource = new SSE('/api/chat', {
        headers: {
            'Content-Type': 'application/json'
        },
        payload: JSON.stringify({ messages: chatMessages })
    })

    query = ''

    eventSource.addEventListener('error', handleError)

    eventSource.addEventListener('message', (e) => {
        scrollToBottom()
        try {
            loading = false
            if (e.data === '[DONE]') {
                chatMessages = [...chatMessages, { role: 'assistant', content: answer }]
                answer = ''
                return
            }

            const completionResponse = JSON.parse(e.data)
            const [{ delta }] = completionResponse.choices

            if (delta.content) {
                answer = (answer ?? '') + delta.content
            }
        } catch (err) {
            handleError(err)
        }
    })
    eventSource.stream()
    scrollToBottom()
}





function handleError<T>(err: T) {
    loading = false
    query = ''
    answer = ''
    console.error(err)
}