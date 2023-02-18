
import { useState } from 'react';
import { send } from 'emailjs-com';

import "../Styles/Quotation.css"



function Quotation() {

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      'service_2i3dgfd',
      'template_sf5pc6l',
      toSend,
      'nAC1GsmplViH7Q-BH'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: '',
    message: '',
    reply_to: '',
  });

  

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };


  return (
    <div className='container'>
      <form  onSubmit={onSubmit}>
        
        <div className='row'>

          <div className='rowcol col1'>
            <label className='label'>
              Name
            </label>
            <input className='input' type='text' name='from_name' placeholder='Your Name' value={toSend.from_name} onChange={handleChange}/>
          </div>


          <div className='rowcol col2'>
            <label className='label'>
              Email
            </label>
            <input className='input' type='text'  type='text' placeholder='Your Email' name='reply_to' value={toSend.reply_to} onChange={handleChange}/>
          </div>

        </div>
        
        <div className='row'>
          <div className='rowcol col1'>
            <label className='label'>
              Number
            </label>
            <input className='input' type='text' placeholder='Your Number' />
          </div>

          <div className='rowcol col2'>
            <label className='label'>
              To
            </label>
            <input className='input' type='text' name='to_name' placeholder='Acceron India Pvt. Ltd.' value={toSend.to_name} onChange={handleChange} />
          </div>
        </div>

        <div className='row_message'>
          <label className='label'>
            Message
          </label>
          <textarea rows="3" cols="100" type='text' name='message' placeholder='' value={toSend.message} onChange={handleChange}/>
        </div>

      <button type='submit'>Submit</button>
      {/* <input type="submit" value="Send" /> */}
      </form>
    </div>
  )
}

export default Quotation