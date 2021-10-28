import styles from './moduleBtn.module.css';

const ModuleBtn = ({btnClass, btnName}) => {//props kullanmak yerine direk kullanılacak props isimleri bu şekilde yazabiliriz
    return(
        <div className={styles.main}>
            <button className={styles[btnClass]}>{btnName}</button>
        </div>//property leri tüm props u çekmek yerine direk isim olarak çektik,btnClass=css te nçekeceğimiz özellikler, btnName=buton içerisine yazılacak text
    )
}

export default ModuleBtn;