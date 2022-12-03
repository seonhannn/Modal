import React from 'react';
import styled from 'styled-components';

const ModalContainer = styled.div`
  .modal {
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 99;
    background-color: rgba(0, 0, 0, 0.6);
  }
  .modal button {
  outline: none;
  cursor: pointer;
  border: 0;
}
.modal > section {
  width: 90%;
  max-width: 450px;
  margin: 0 auto;
  border-radius: 0.3rem;
  background-color: #fff;
  /* 팝업이 열릴때 스르륵 열리는 효과 */
  animation: modal-show 0.3s;
  overflow: hidden;
}
.modal > section > main {
  position: relative;
  padding: 16px 64px 16px 16px;
  font-weight: 700;
}
.close {
  position: absolute;
  top: 15px;
  right: 15px;
  width: 30px;
  font-size: 21px;
  font-weight: 700;
  text-align: center;
  color: #999;
  background-color: transparent;
}
.modalContent {
  padding: 10px;
}
.modal > section > main {
  padding: 16px;
}
.modal > section > footer {
  padding: 12px 16px;
  text-align: center;
}
.modal > section > footer button {
  padding: 6px 12px;
  color: #fff;
  background-color: #8EC3B0;
  border-radius: 5px;
  font-size: 13px;
}
.modal.openModal {
  display: flex;
  align-items: center;
  animation: modal-bg-show 0.3s;
}
@keyframes modal-show {
  from {
    opacity: 0;
    margin-top: -50px;
  }
  to {
    opacity: 1;
    margin-top: 0;
  }
}
@keyframes modal-bg-show {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
`

const Modal = (props) => {
  const { open, close } = props;

  return (
    <ModalContainer>
      <div className={open ? 'openModal modal' : 'modal'}>
        {open ? (
          <section>
            <main> 
              <div className='modalContent'>{props.children}</div> // 모달 내용
              <button className="close" onClick={close}> // 우측 상단 닫기 버튼
                &times;
              </button>
            </main>
            <footer>
              <button className="modalBtn" onClick={close}> // 하단 
                close
              </button>
            </footer>
          </section>
        ) : null}
      </div>
    </ModalContainer>
  );
};

export default Modal;
