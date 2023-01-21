import React from "react";
import c1Icon from "../../../assets/icons/c1.svg";
import c2Icon from "../../../assets/icons/c2.svg";
import c3Icon from "../../../assets/icons/c3.svg";
import c4Icon from "../../../assets/icons/c4.svg";
import c5Icon from "../../../assets/icons/c5.svg";
import c6Icon from "../../../assets/icons/c6.svg";
const CourseInfo = () => {
  return (
    <div className="course__info">
      <h3>Kurslardan nimani kutish kerak</h3>
      <div className="course__info-box">
        <div className="course__info-item">
          <h4>
            <img src={c1Icon} alt="" />
            <span>O'z tezligingiz bilan o'rganing</span>
          </h4>
          <p>
            Belgilangan jadvalsiz va amal qilish oson usul bilan uyda o'rganishdan rohatlaning. Siz o'zingizning
            sur'atingizni o'rnatasiz.
          </p>
        </div>
        <div className="course__info-item">
          <h4>
            <img src={c2Icon} alt="" />
            <span>Eng yaxshi mutaxassislardan o'rganing</span>
          </h4>
          <p>
            Belgilangan jadvalsiz va amal qilish oson usul bilan uyda o'rganishdan rohatlaning. Siz o'zingizning
            sur'atingizni o'rnatasiz.
          </p>
        </div>
        <div className="course__info-item">
          <h4>
            <img src={c3Icon} alt="" />
            <span>Tajribali o'qituvchilar bilan tanishing</span>
          </h4>
          <p>
            Har bir mutaxassis har bir darsda aniq ko'rsatmalar, haqiqiy ishtiyoq va professional tushuncha bilan eng
            yaxshi nima qilishni o'rgatadi.
          </p>
        </div>
        <div className="course__info-item">
          <h4>
            <img src={c4Icon} alt="" />
            <span>Sertifikatlar</span>
          </h4>
          <p>
            Agar siz Plus yoki PRO aʼzosi boʻlsangiz, har bir kurs uchun oʻqituvchingiz tomonidan imzolangan maxsus
            sertifikat oling. Uni portfelingizda, ijtimoiy tarmoqlarda yoki xohlagan joyingizda baham ko'ring.
          </p>
        </div>
        <div className="course__info-item">
          <h4>
            <img src={c5Icon} alt="" />
            <span>Oldingi qatordagi o'rindiqlarni oling</span>
          </h4>
          <p>
            Eng yuqori sifatli videolar, shuning uchun siz biron bir tafsilotni o'tkazib yubormaysiz. Cheksiz kirish
            bilan siz ularni texnikangizni mukammallashtirish uchun qancha marta ko'rishingiz mumkin.
          </p>
        </div>
        <div className="course__info-item">
          <h4>
            <img src={c1Icon} alt="" />
            <span>Bilim va g'oyalarni baham ko'ring</span>
          </h4>
          <p>
            Savollar bering, fikr-mulohazalarni so'rang yoki echimlarni taklif qiling. O'qish tajribangizni jamiyatdagi
            siz kabi ijodga ishtiyoqli boshqa talabalar bilan baham ko'ring.
          </p>
        </div>
        <div className="course__info-item">
          <h4>
            <img src={c6Icon} alt="" />
            <span>Global ijodiy hamjamiyat bilan bog'laning</span>
          </h4>
          <p>
            Jamiyatda dunyoning turli burchaklaridan kelgan millionlab odamlar istiqomat qiladi, ular o'z ijodini kashf
            etish va ifodalashga qiziqadi.
          </p>
        </div>
        <div className="course__info-item">
          <h4>
            <img src={c1Icon} alt="" />
            <span>Professional ishlab chiqarilgan kurslarni tomosha qiling</span>
          </h4>
          <p>
            New castle o'qituvchilar ro'yxatini tuzadi va yuqori sifatli onlayn ta'lim tajribasini ta'minlash uchun har
            bir kursni uyda ishlab chiqaradi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseInfo;
