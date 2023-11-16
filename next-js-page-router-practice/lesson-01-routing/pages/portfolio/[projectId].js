import { useRouter } from "next/router"

const ProjectId = () => {
    const router = useRouter();
    console.log(router.pathname, router.query)
    return (
        <div>ProjectId</div>
    )
}

export default ProjectId