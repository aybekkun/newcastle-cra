import React from "react";

const AdvantagesSection = () => {
  return (
    <section className="advantages">
      <div className="container">
        <div className="advantages__inner">
          <div className="advantages__item">
            <h3 className="advantages__title">Qancha vaqt shug'ullanish kerak?</h3>
            <p className="advantages__desc">
              Har bir unit uchun o'rtacha 3- 4 soat shug'ullansangiz natijasi yaxshi bo'ladi{" "}
            </p>
          </div>
          <div className="advantages__item">
            <h3 className="advantages__title">Kurs tamomlangandan keyingi daraja?</h3>
            <p className="advantages__desc">
              Har bir darajani tugatganingizdan keyin 1000 atrofidagi so'zlarni ingliz tilida o'qish, yozish, eshitish
              va gapirishda ishlata olasiz.{" "}
            </p>
          </div>
          <div className="advantages__item">
            <h3 className="advantages__title">Platformadan qansay foydalanishga tushunmay qolsangiz</h3>
            <p className="advantages__desc">
              Bunday holatda sizga online mentor biriktirilgan bo'ladi va undan to'liq foydalanishingiz mumkin.{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
