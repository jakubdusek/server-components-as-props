import {getContent} from "@/actions/content";
import ClientComponent from "@/components/custom/ClientComponent";

const TestServerComponent = async () => {
    console.log("server side component");
    const content = await getContent();
    return <strong>
        {content}
        <ClientComponent />
    </strong>;
};

export default TestServerComponent;
