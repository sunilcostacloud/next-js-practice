import { redirect } from 'next/navigation'

const RedirectToHome = () => {
    const test = 0
    if (test === 0) {
        redirect("/")
    }

    return (
        <div>RedirectToHome</div>
    )
}

export default RedirectToHome