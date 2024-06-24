import { useModalContext } from '../../../context/useModalContext';
import css from './UserSettingsModal.module.css';
import ModalWindow from '../../../shared/components/ModalWindow/ModalWindow';
import { useEffect, useRef, useState } from 'react';
import { icons as sprite } from '../../../shared/icons/index';
import CustomScrollWrapper from '../../../shared/components/CustomScrollWrapper/CustomScrollWrapper';

const UserSettingsModal = ({
  isOpen,
  onRequestClose,
  children,
  shouldCloseOnOverlayClick = true,
}) => {
  const { closeModal } = useModalContext();
  const [avatarFile, setAvatarFile] = useState(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const hiddenFileInput = useRef(null);

  const handleClick = (event) => {
    event.preventDefault();
    if (hiddenFileInput.current) {
      hiddenFileInput.current.click();
    }
  };

  const handleChange = (event) => {
    if (event.target.files) {
      const fileUploaded = event.target.files[0];
      setAvatarFile(fileUploaded);
    }
  };

  return (
    <ModalWindow
      isOpen={true}
      onRequestClose={closeModal}
      shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
    >
      <CustomScrollWrapper>
        <div className={css.wrapper}>
          <form onSubmit={undefined} className={css.form}>
            <div className={css.userPic}>
              <h2>Setting</h2>
              <div className={css.picWrapper}>
                <div className={css.pic}>
                  <img
                    src={
                      avatarFile
                        ? URL.createObjectURL(avatarFile)
                        : 'user-icon.jpg'
                    }
                    alt="avatar"
                  />
                </div>
                <div className={css.uploadWrapper} onClick={handleClick}>
                  <svg className={css.iconUpload}>
                    <use xlinkHref={`${sprite}#upload`} />
                  </svg>
                  <p className={css.textRegular}>Upload a photo</p>
                </div>
                <input
                  type="file"
                  onChange={handleChange}
                  ref={hiddenFileInput}
                  style={{ display: 'none' }}
                />
              </div>
            </div>
            <div className={css.inputs}>
              <div className={css.midContainer}>
                <h3>Your gender identity</h3>
                <div className={css.radioContainer}>
                  <div className={css.radioButton}>
                    <input
                      className={css.radio}
                      type="radio"
                      name="gender"
                      id="woman"
                    />
                    <label className={css.radioLabel} htmlFor="woman">
                      Woman
                    </label>
                  </div>
                  <div className={css.radioButton}>
                    <input
                      className={css.radio}
                      type="radio"
                      name="gender"
                      id="man"
                    />
                    <label className={css.radioLabel} htmlFor="man">
                      Man
                    </label>
                  </div>
                </div>
              </div>
              <div className={css.midContainer}>
                <div className={css.userInfoInputContainer}>
                  <h3>Your name</h3>
                  <input
                    className={css.userInfoInput}
                    type="text"
                    name="name"
                    id="name"
                  />
                </div>
                <div className={css.userInfoInputContainer}>
                  <h3>Email</h3>
                  <input
                    className={css.userInfoInput}
                    type="email"
                    name="email"
                    id="email"
                  />
                </div>
              </div>
              <div className={css.midContainer}>
                <h3>My daily norma</h3>
                <div className={css.formulaContainer}>
                  <div className={css.formula}>
                    <p className={css.textRegular}>For woman:</p>
                    <p className={css.textAccent}>V=(M*0,03) + (T*0,4)</p>
                  </div>
                  <div className={css.formula}>
                    <p className={css.textRegular}>For man:</p>
                    <p className={css.textAccent}>V=(M*0,04) + (T*0,6)</p>
                  </div>
                </div>
                <div className={css.textarea} readOnly>
                  <span className={css.textAccent}>*</span> V is the volume of
                  the water norm in liters per day, M is your body weight, T is
                  the time of active sports, or another type of activity
                  commensurate in terms of loads (in the absence of these, you
                  must set 0)
                </div>
                <div className={css.note}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                  >
                    <path
                      d="M7.57934 10.4315C7.64769 11.1434 7.76356 11.6724 7.92303 12.0214C8.08447 12.3693 8.37106 12.5429 8.78478 12.5429C8.86212 12.5429 8.93131 12.5308 8.99994 12.5167C9.07025 12.5308 9.13916 12.5429 9.21706 12.5429C9.62966 12.5429 9.91709 12.3693 10.0777 12.0214C10.238 11.6724 10.3519 11.1434 10.4217 10.4315L10.789 4.93532C10.8573 3.86404 10.8922 3.09538 10.8922 2.62879C10.8922 1.99372 10.7265 1.49816 10.3941 1.14238C10.0605 0.7866 9.62234 0.609131 9.07953 0.609131C9.05056 0.609131 9.02891 0.6156 9.0005 0.616725C8.9735 0.6156 8.95128 0.609131 8.92316 0.609131C8.37922 0.609131 7.94187 0.7866 7.60887 1.14238C7.27616 1.49872 7.10938 1.99457 7.10938 2.62907C7.10938 3.09566 7.14341 3.86432 7.21287 4.9356L7.57934 10.4315ZM9.01428 14.5518C8.48722 14.5518 8.03947 14.718 7.66766 15.0505C7.29612 15.3832 7.10994 15.7871 7.10994 16.2613C7.10994 16.7965 7.29837 17.2178 7.67244 17.5238C8.04819 17.8298 8.48637 17.9828 8.98728 17.9828C9.49719 17.9828 9.94184 17.832 10.3221 17.5297C10.7018 17.2282 10.8916 16.8046 10.8916 16.2618C10.8916 15.7876 10.7099 15.3838 10.3466 15.051C9.98319 14.718 9.53909 14.5518 9.01344 14.5518"
                      fill="#9BE1A0"
                    />
                  </svg>
                  <p className={css.textRegular}>Active time in hours</p>
                </div>
              </div>
              <div className={css.midContainer}></div>
              <div className={css.midContainer}></div>
            </div>
            <div className={css.buttonContainer}></div>
          </form>
        </div>
      </CustomScrollWrapper>
    </ModalWindow>
  );
};

export default UserSettingsModal;
