export default function App2(props){
    return <Row>
        <RowItem>Item1</RowItem>
        <RowItem><Capitalize>Item2</Capitalize></RowItem>
        <RowItem><Capitalize>Item3</Capitalize></RowItem>
    </Row>
}

function Row(props){
    return <div className="myrow">
        {props.children}
    </div>
}

function RowItem(props){
    return <div className="rowitem">
        {props.children}
    </div>
}

function Capitalize(props){
    const upper = props.children.toUpperCase()

    return <span style={{color: "green"}}>{upper}</span>
}