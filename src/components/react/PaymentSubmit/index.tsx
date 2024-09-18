import { useState } from "react";
import "./index.scss";

interface Props {
  banks: {
    name: string;
    img: string;
  }[];
}

function PaymentSubmit({ banks }: Props) {
  const [step, setStep] = useState(1);
  const [name, setName] = useState<string | null>(null);

  return (
    <>
      {step === 1 && (
        <div className="atm-card">
          <div className="atm-card__list">
            {banks.map((bank) => (
              <img
                className={bank.name === name ? "active-bank" : ""}
                src={bank.img}
                width={100}
                height={50}
                alt={bank.name}
                onClick={() => setName(bank.name)}
              />
            ))}
          </div>
          <div className="container-button">
            <button
              className={`contact-form__button ${!name ? "disable" : ""}`}
              onClick={() => setStep(step + 1)}
              disabled={!name}
            >
              Tiếp tục
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="atm-card">
          <form action="">
            <div>
              <label>Nhập thông tin thẻ</label>
              <div>
                <input type="number" placeholder="Số thẻ" required />
                <input type="date" placeholder="Ngày phát hành" required />
                <input
                  type="text"
                  placeholder="Họ và tên in trên thẻ"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="">Thông tin liên hệ</label>
              <div>
                <input type="number" placeholder="Số điện thoại" />
                <input type="email" placeholder="Email" />
              </div>
            </div>
            <div className="container-button">
              <button
                className="button-form__back"
                onClick={() => setStep(step - 1)}
              >
                Quay lại
              </button>
              <button type="submit" className="button-form__continue">
                Thanh toán
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default PaymentSubmit;
