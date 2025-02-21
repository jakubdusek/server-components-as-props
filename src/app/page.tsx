import DialogWithServerContent from "@/components/custom/DialogWithServerContent";
import TestServerComponent from "@/components/custom/server/TestServerComponent";
import {getH1} from "@/actions/content";

export default async function Home() {
    const h1 = await getH1();

    return (
        <DialogWithServerContent h1={h1}>
            <TestServerComponent/>
        </DialogWithServerContent>
    );
}
