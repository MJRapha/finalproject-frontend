import { useAppSelector } from '../../app/hooks';
import AndroidItems from '../../routes/MobilePhones/AndroidItems';
import css from './AndroidPage.module.scss'

const AndroidPage = () => {
    const Android = useAppSelector((s) => s.SamsungItems.Anarticles);
    return (
        <div className={css.gridContainer}>
            {Android.map((g) => (
                <AndroidItems {...g} key={g.id} />
            ))}
        </div>
    )
}

export default AndroidPage