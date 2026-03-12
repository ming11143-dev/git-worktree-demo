import FAQItem from './FAQItem';
import { faqData } from '../data/faq';

const FAQ = () => {
    return (
        <section className="faq" id="faq">
            <div className="container">
                <div className="section-header">
                    <span className="section-header__badge">常見問題</span>
                    <h2 className="section-header__title">您想知道的，都在這裡</h2>
                    <p className="section-header__desc">
                        我們整理了客戶最常問的問題，幫助您更快速地了解 SalesPilot 如何協助您的業務。
                    </p>
                </div>

                <div className="faq__list">
                    {faqData.map((item, index) => (
                        <FAQItem
                            key={index}
                            question={item.question}
                            answer={item.answer}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
