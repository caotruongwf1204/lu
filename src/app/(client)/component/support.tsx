import Image from "next/image";
import '@/app/css/support.css';

export default function Support() {
  return (
    <div className="flex items-center justify-center pt-10 pb-10">
      <div className="container">
        <div className="row support-area">
          <div className="support-main">
            <div className="sup-img flex items-center justify-center">
              <Image
                width={50}
                height={50}
                className="object-cover"
                alt="logo"
                src="/sup1.png"
              />
            </div>
            <div className="sup-content text-center">
              <h5 className="font-bold text-lg">Giao hàng trong 24h</h5>
              <p>Miễn phí giao hàng đơn từ 500.000</p>
            </div>
          </div>
          <div className="support-main">
            <div className="sup-img flex items-center justify-center">
              <Image
                width={50}
                height={50}
                className="object-cover"
                alt="logo"
                src="/sup2.png"
              />
            </div>
            <div className="sup-content text-center">
              <h5 className="font-bold text-lg">Giao hàng trong 24h</h5>
              <p>Miễn phí giao hàng đơn từ 500.000</p>
            </div>
          </div>
          <div className="support-main">
            <div className="sup-img flex items-center justify-center">
              <Image
                width={50}
                height={50}
                className="object-cover"
                alt="logo"
                src="/sup3.png"
              />
            </div>
            <div className="sup-content text-center">
              <h5 className="font-bold text-lg">Giao hàng trong 24h</h5>
              <p>Miễn phí giao hàng đơn từ 500.000</p>
            </div>
          </div>
          <div className="support-main">
            <div className="sup-img flex items-center justify-center">
              <Image
                width={50}
                height={50}
                className="object-cover"
                alt="logo"
                src="/sup4.png"
              />
            </div>
            <div className="sup-content text-center">
              <h5 className="font-bold text-lg">Giao hàng trong 24h</h5>
              <p>Miễn phí giao hàng đơn từ 500.000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
