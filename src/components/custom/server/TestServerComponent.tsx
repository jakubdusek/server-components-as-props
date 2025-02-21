import {getContent} from "@/actions/content";

const TestServerComponent = async () => {
    console.log("server side component");
    const content = await getContent();
    return <strong>{content}</strong>;
};

export default TestServerComponent;
