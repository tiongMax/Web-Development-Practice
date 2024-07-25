const HEAD: JSX.Element = (
    <div style={{
            width: "50px",
            height: "50px",
            borderRadius: "100%",
            border: "10px solid black",
            position: "absolute",
            top: "50px",
            right: "-30px"
        }}
    />
)

const BODY: JSX.Element = (
    <div style={{
            width: "10px",
            height: "100px",
            background: "black",
            position: "absolute",
            top: "118px",
            right: "0px"
        }}
    />
)

export default function HangmanDrawing(): JSX.Element {
    return (
        <div style={{ position: "relative" }}>
            {HEAD}
            {BODY}
            <div style={{
                    height: "50px",
                    width: "10px",
                    background: "black",
                    marginLeft: "120px",
                    position: "absolute",
                    top: 0,
                    right: 0
                }} 
            />
            <div style={{
                    height: "10px",
                    width: "200px",
                    background: "black",
                    marginLeft: "120px"
                }} 
            />
            <div style={{
                    height: "400px",
                    width: "10px",
                    background: "black",
                    marginLeft: "120px"
                }} 
            />
            <div style={{ height: "10px", width: "250px", background: "black" }} />
        </div>
    )
}