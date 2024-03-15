import styles from './Container.module.css'

const FoodInput = ({onKeyDown}) =>{
    return <div className={`${styles.foodInputContainer}`}>
        <input className={styles.foodInput} type='search' placeholder='add your item' 
        onKeyDown={onKeyDown}
        />
</div>
}


export default FoodInput;