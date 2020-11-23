import "./App.css";
import React from "react";
import topImage from "./images/topImage.png";
import sTopImage from "./images/sTopImage.png";
import mTopImage from "./images/mTopImage.png";
import book from "./images/book.png";
import bottomSnow from "./images/bottomSnow.png";
import coffee from "./images/coffee.png";
import kaibo1 from "./images/design-no-kaibo1.png";
import kaibo2 from "./images/design-no-kaibo2.jpg";
import glass from "./images/glass.png";
import kihon_no_ki from "./images/kihon-no-ki.jpg";
import Marbleco_logo from "./images/Marbleco_logo.png";
import minibook from "./images/minibook.png";
import originalCoffeeCan from "./images/original-coffee-can.jpg";
import packageDesign from "./images/package-design.png";
import topSnow from "./images/topSnow.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import marble_icon from "./images/Marble_icon.png";

const App = () => {
  window.onload = function () {
    const spinner = document.getElementById("loading");
    spinner.classList.add("loaded");
  };
  return (
    <>
      <div id="loading">
        <img src={marble_icon} alt="marble_icon" />
        <small>Loading...</small>
      </div>
      <div className="bgClouds"></div>
      <img src={topImage} className="topImage" alt="topImage"></img>
      <img src={sTopImage} className="sTopImage" alt="topImage"></img>
      <img src={mTopImage} className="mTopImage" alt="topImage"></img>

      <a href="mailto:hello@marble-co.net?body=氏名、参加希望のワークショップ、参加人数をご記入の上送信してください。%0D%0A %0D%0A【氏名】%0D%0A【参加希望ワークショップ】%0D%0A【参加人数】%0D%0A %0D%0A 複数のワークショップに参加されたい場合は以下に同じ形式で続けてください。">
        <div className="alwaysTopRight">
          <p>お申し込み</p>
          <i className="fas fa-envelope"></i>
        </div>
      </a>

      <a
        href="mailto:hello@marble-co.net?body=氏名、参加希望のワークショップ、参加人数をご記入の上送信してください。%0D%0A %0D%0A【氏名】%0D%0A【参加希望ワークショップ】%0D%0A【参加人数】%0D%0A %0D%0A 複数のワークショップに参加されたい場合は以下に同じ形式で続けてください。"
        className="apply"
      >
        <button>
          <i className="fas fa-envelope"></i>お申し込み
        </button>
      </a>

      <h2 className="aboutTitle">
        こんにちは、
        <img src={Marbleco_logo} alt="Marble_logo" />
        です。
      </h2>
      <div className="aboutFlex container">
        <img src={packageDesign} alt="package_design"></img>
        <p>
          毎年200を超える印刷物をつくり、カフェやクライアントのお店のディスプレイをつくり、パッケージデザインをして、WEBもリリースしたり、日々さまざまなものをデザインしてカタチにしています。そんなわたしたちのデザインはどのようにして生み出されてきたのか。どうしてこんなデザインになったのか――　をデザイナーとともに追体験して、みなさんの日々の生活にデザインの視点を取り入れてもらえるような、そんな体験型ワークショップを開催します。
        </p>
      </div>

      <div className="titleContainer">
        <p className="title">ワークショップ</p>
      </div>
      <p className="notice">※定員:各ワークショップ20人</p>

      <div className="container">
        <div className="trigger">
          <div className="workShops">
            <AnchorLink href="#kihon">
              <div className="workShop book">
                <p className="workShopCard kihon">印刷の基本の"キ"</p>
                <img src={book} alt="book"></img>
              </div>
            </AnchorLink>
            <AnchorLink href="#can">
              <div className="workShop coffee">
                <p className="workShopCard can">
                  オリジナル
                  <br />
                  コーヒー缶を<nobr>作ろう</nobr>
                </p>
                <img src={coffee} alt="coffee"></img>
              </div>
            </AnchorLink>
            <AnchorLink href="#kaibo">
              <div className="workShop glass">
                <p className="workShopCard kaibo">
                  デザインを
                  <br />
                  解剖してみる
                </p>
                <img src={glass} alt="glass"></img>
              </div>
            </AnchorLink>
          </div>

          <img src={topSnow} className="topSnow" alt="topSnow"></img>
          <div className="white">
            <div className="timeLine">
              <p className="schedule">
                <nobr>スケジュール</nobr>
              </p>
              <div className="bar">
                <span className="start time1">15:00</span>
                <span className="end time2">16:30</span>
                <span className="start time3">17:00</span>
                <span className="end time4">18:30</span>
                <span className="start time5">19:00</span>
                <span className="end time6">20:30</span>
              </div>
            </div>
            <div>
              <div className="workShopFlex" id="kihon">
                <img src={kihon_no_ki} alt="kihon_no_ki"></img>
                <div className="info">
                  <p className="workShopCard kihon2">
                    <nobr>印刷の基本の"キ"</nobr>
                  </p>
                  <p>
                    オフセット印刷や特殊印刷など様々な印刷技法を駆使してきた、印刷会社のプリンティングディレクターをお招きして、デザインに活用できる印刷工程の基礎を学びます。
                  </p>
                </div>
              </div>
              <div className="workShopFlex" id="can">
                <img src={originalCoffeeCan} alt="original_coffee_can"></img>
                <div className="info">
                  <p className="workShopCard can2">
                    <nobr>オリジナルコーヒー缶を作ろう</nobr>
                  </p>
                  <p>
                    平面のデザインとはまた違った面白さのあるパッケージデザイン。制作工程上の様々な制約や、形状をうまく活かしたオリジナルのコーヒー缶のデザインに挑戦します。
                  </p>
                </div>
              </div>
              <div className="workShopFlex" id="kaibo">
                <img src={kaibo2} alt="kaibo2"></img>
                <div className="info">
                  <p className="workShopCard kaibo2">
                    <nobr>デザインを解剖してみる</nobr>
                    <img src={kaibo1} alt="kaibo1" />
                  </p>
                  <p>
                    これまでマーブルが手がけてきた制作物を「どうしてこんなデザインになったのか？」をデザイナー本人と直接対話しながら掘り下げていきます。
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="soundEventContainer">
            <div className="soundEvent">
              <h4>同時開催</h4>
              <p className="middleTitle">ゲームブックを楽しもう！</p>
              <div className="soundBook">
                <p>
                  音を使った新感覚のゲームブックの体験コーナーも設置しています。体験版小冊子を会場にて配布中！（非売品）
                </p>
                <img src={minibook} alt="minibook"></img>
              </div>
            </div>
          </div>
          <img src={bottomSnow} className="bottomSnow" alt="bottomSnow"></img>
          <div className="titleContainer">
            <p className="title">概要 / 参加方法</p>
          </div>
          <p className="center2">
            【日時】2020.12.25(FRI)15:00 ~ 21:00 <br />
            【会場】Marble BLDG.
            <br />
            【費用】3000円(コーヒー・プチケーキ付き)
            <br />
            【定員】各ワークショップ20人
          </p>
          <p className="center">
            興味のある方はお気軽にお電話またはEmailにてお申し込みください。
            <br />
            お名前、参加人数をお伝えください。
            <br />
            <span className="notice">
              ※定員に達し次第締切とさせていただきます。
            </span>
          </p>
          <a
            href="mailto:hello@marble-co.net?body=氏名、参加希望のワークショップ、参加人数をご記入の上送信してください。%0D%0A %0D%0A【氏名】%0D%0A【参加希望ワークショップ】%0D%0A【参加人数】%0D%0A %0D%0A 複数のワークショップに参加されたい場合は以下に同じ形式で続けてください。"
            className="apply"
          >
            <button>
              <i className="fas fa-envelope"></i>お申し込み
            </button>
          </a>
          <div className="titleContainer">
            <p className="title">アクセス</p>
          </div>
          <div className="accessFlex">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3267.143860982473!2d135.74470901518524!3d35.0281307731191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x600107e757ca1e2b%3A0x614fbb2a51d2b1c0!2sMarble.co!5e0!3m2!1sja!2sjp!4v1605952357267!5m2!1sja!2sjp"
              width="50%"
              height="300px"
              frameBorder="0"
              // style="border:0;"
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
              className="map"
              title="marble_map"
            ></iframe>
            <div>
              <h4>Marble BLDG.</h4>
              <p>
                〒602-8453
                <br />
                京都市上京区笹屋町通智恵光院西入ル笹屋町1-519
                <br />
                Marble BLDG.
              </p>
            </div>
          </div>

          <div className="titleContainer">
            <p className="title">お問い合わせ</p>
          </div>
          <div className="contact">
            <h4>Marble.co</h4>
            <a href="tel:000-1234-5678">
              <p>
                <i className="fas fa-phone"></i>075-451-8765
              </p>
            </a>
            <br />
            <a href="mailto:hello@marble-co.net">
              <p>
                <i className="fas fa-envelope"></i>hello@marble-co.net
              </p>
            </a>
          </div>
        </div>
      </div>
      <img src={bottomSnow} className="footerImage" alt="bottomSnow"></img>
      <div className="footer">
        <p>
          主催
          <a
            href="https://www.marble-co.net/portfolio"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Marbleco_logo} alt="marble_logo"></img>
          </a>
        </p>
      </div>
    </>
  );
};

export default App;
