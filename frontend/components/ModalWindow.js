import styles from "../styles/Home.module.css";

const ModalWindow = ({ closeModal }) => {
    const citiesOfKazakhstan = [
      'Астана',
      'Алматы',
      'Шымкент',
      'Орал',
      'Атырау',
      'Актау',
      'Павлодар',
        'Семей',

    ];
  
    const handleCityChange = (e) => {
      const selected = e.target.textContent;
      localStorage.setItem('city', selected);
      closeModal();
    };
  
    return (
      <div className={styles.modalContainer}>
        <div>Выберите город</div>
        <div className={styles.modalList}>
          {citiesOfKazakhstan.map((city, index) => (
            <button key={index} onClick={handleCityChange}>
              {city}
            </button>
          ))}
        </div>
      </div>
    );
  };

  export default ModalWindow;