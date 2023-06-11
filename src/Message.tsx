// PascalCasing-capitilize first word of every word
function Message() {
    // JSX: JavaScript XML
    const name = 'Holly';
    if (name)
        return<h1>Hello {name}</h1>
    return <h1>Hello World</h1>;
}

// Export as default object in order to use it
export default Message;