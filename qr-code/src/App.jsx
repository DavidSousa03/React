import qrCode from "./assets/qrCode.png"
import "./app.css"
function App(){
  return (
    <main>
      <img src={qrCode} alt="imagen de qr code" />
      <strong>Improve your front-end skills by builging projects </strong>
      <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level </p>
    </main>
  )
};

export default App