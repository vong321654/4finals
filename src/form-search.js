import React from "react";


export default function FormSearch() {
    const textKw = React.useRef()
    const btOK = React.createRef()

    const onChangeKw = () => {
        if (textKw.current.value.trim() !== '') {
            btOK.current.disabled = false
        } else {
            btOK.current.disabled = true
        }
    }
    return (
        <div style={{margin:'30px'}}>
            <form>
                <input type="text" name="kw" placeholder="ค้นห้า" ref={textKw} onInput={onChangeKw}/>&nbsp;
                <button ref={btOK} disabled>ตกลง</button>
            </form>
        </div>
    )
}