import { SSE } from 'sse.js'















export const handleSubmit = async (chatArgs:any, scrollToDiv:any) => {

    // ==============================================================

    function scrollToBottom() {
        setTimeout(function () {
            scrollToDiv.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' })
        }, 100)
    }

    function handleError<T>(err: T) {
        chatArgs.loading = false
        chatArgs.query = ''
        chatArgs.answer = ''
        console.error(err)
    }

    // ==============================================================

    chatArgs.loading = true
    chatArgs.chatMessages = [...chatArgs.chatMessages, { role: 'user', content: chatArgs.query }]

    const eventSource = new SSE('/api/chat', {
        headers: {
            'Content-Type': 'application/json'
        },
        payload: JSON.stringify({ messages: chatArgs.chatMessages })
    })

    chatArgs.query = ''

    eventSource.addEventListener('error', handleError)

    eventSource.addEventListener('message', (e) => {
        scrollToBottom()
        try {
            chatArgs.loading = false
            if (e.data === '[DONE]') {
                chatArgs.chatMessages = [...chatArgs.chatMessages, { role: 'assistant', content: chatArgs.answer }]
                chatArgs.answer = ''
                return
            }

            const completionResponse = JSON.parse(e.data)
            const [{ delta }] = completionResponse.choices

            if (delta.content) {
                chatArgs.answer = (chatArgs.answer ?? '') + delta.content
            }
        } catch (err) {
            handleError(err)
        }
    })
    eventSource.stream()
    scrollToBottom()
}





