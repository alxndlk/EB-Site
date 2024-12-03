import styles from './Main.module.css';

interface Image {
    src: string;
    id?: string;
    height?: string;
}

interface ImageRowProps {
    images: Image[];
}

export const ImageRow = ({ images }: ImageRowProps) => {
    return (
        <div className={styles.images_col}>
            {images.map((image, index) => (
                <div className={styles.image_holder} key={index}>
                    <div
                        id={image.id}
                        style={{
                            backgroundImage: `url(${image.src})`,
                            height: image.height,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                        className={styles.image_bg}
                    />
                </div>
            ))}
        </div>
    );
};
