/* eslint-disable prettier/prettier */
import { useState } from 'react';

export default function AddMessage({ handleOpenMessage, addMessage }) {
  const [userName, setUserName] = useState('');
  const [message, setMessage] = useState('');

  function handleUserName(name) {
    setUserName(name);
  }

  function handleMessage(content) {
    setMessage(content);
  }

  function handleSubmit() {
    /* eslint-disable no-console */
    addMessage({userName, message});
    console.log(userName);
    console.log(message);
    handleOpenMessage();
  }

  return (
    <div className='p-8 mt-5'>
      <input
        type="text"
        placeholder="작성자"
        value={userName}
        onChange={(e) => handleUserName(e.target.value)}
        className="w-64 h-8 p-1 text-xl border align-center font-nanumPen outline-[#f1c1c1]"
      /><br/>
      
      <textarea
        placeholder="내용"
        value={message}
        onChange={(e) => handleMessage(e.target.value)}
        className="mt-1 w-64 h-40 p-1 text-xl border resize-none align-center font-nanumPen outline-[#f1c1c1]"
      />

      <div className="flex justify-end">
        <button 
          type="button"
          className="px-4 h-8 py-1 mr-3 text-sm text-[#e26a68] bg-white rounded hover:bg-[#e7e7e7] shadow-md"
          onClick={() => handleOpenMessage()}
        >
          취소
        </button>

        <button 
          type="submit"
          className="px-4 h-8 py-1 text-sm text-white bg-[#e26a68] rounded hover:bg-[#c25a58] shadow-md"
          onClick={() => handleSubmit()}
        >
          작성 완료
        </button>
      </div>
    </div>
  );
}