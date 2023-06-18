{/* <div id='parent'>
    <div id='child'>
        <h1>Hello World for Ract</h1>
        <h2>I am h2</h2>
    </div>
</div> */}

const heading = React.createElement(
    'div',
    { id: 'parent' },
    React.createElement(
        'div',
        { id: 'child' },
        [
            React.createElement(
                'h1',
                {},
                'Hello World for Ract'
            ),
            React.createElement(
                'h2',
                {},
                'I am h2'
            )
        ]
    )
)
console.log(heading)
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(heading)