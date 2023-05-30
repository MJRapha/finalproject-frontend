import { useAppSelector } from '../../app/hooks';
import IPhoneItems from '../../routes/MobilePhones/IPhoneItems';
import css from './IPhonePage.module.scss'

const IPhonePage = () => {
    const IPhone = useAppSelector((s) => s.AppleItems.IParticles);
    console.log(IPhone)
    return (
        <div className={css.gridContainer}>
            {IPhone.map((g) => (
                <IPhoneItems {...g} key={g.id} />
            ))}
        </div>
    )
}

export default IPhonePage