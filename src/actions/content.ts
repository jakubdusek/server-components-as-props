export const getContent = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("server side action");
    return "content from server";
}

export const getH1 = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("server side action h1");
    return "content for h1";
}