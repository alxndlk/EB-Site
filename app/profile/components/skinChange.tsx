'use client';

import { useState, useRef } from 'react';
import { UploadCloudIcon } from 'lucide-react';
import styles from './Main.module.css';
import { useSession } from 'next-auth/react';
import { ThreeDots } from 'react-loader-spinner';

export const SkinUploader: React.FC = () => {
  const { data: session } = useSession();
  const [fileInfo, setFileInfo] = useState<{ name: string; size: string; data?: string } | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ text: string | null; type: 'success' | 'error' | null }>({
    text: null,
    type: null,
  });

  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const sizeInKB = (file.size / 1024).toFixed(2);

      const reader = new FileReader();
      reader.onload = () => {
        setFileInfo({
          name: file.name,
          size: `${sizeInKB} KB`,
          data: reader.result as string,
        });
      };
      reader.readAsDataURL(file);
    } else {
      setFileInfo(null);
    }
  };

  const clearFile = () => {
    if (inputRef.current) {
      inputRef.current.value = '';
    }
    setFileInfo(null);
  };

  const uploadSkin = async () => {
    if (!session?.user?.email) {
      setMessage({ text: 'Пользователь не авторизован.', type: 'error' });
      return;
    }

    if (!fileInfo?.data) {
      setMessage({ text: 'Файл не выбран.', type: 'error' });
      return;
    }

    setIsLoading(true);
    setMessage({ text: null, type: null });

    try {
      const response = await fetch('/api/upload-skin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: session.user.email,
          skin: fileInfo.data,
        }),
      });

      if (response.ok) {
        setMessage({ text: 'Скин успешно загружен!', type: 'success' });
        clearFile();

        setTimeout(() => {
          window.location.reload();
        }, 1000)

      } else {
        const error = await response.json();
        setMessage({ text: error.error || 'Ошибка загрузки скина.', type: 'error' });
      }
    } catch (error) {
      setMessage({ text: `Ошибка соединения с сервером: ${error}`, type: 'error' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.avatar}>

      <div className={styles.text}>
        <div className={styles.title_text}>
          <h4>Скин</h4>
          <span className={styles.optional}>Опция</span>
        </div>
        <div className={styles.paragraph}>
          <p>Используйте свой скин для того, чтобы выделиться среди других игроков.</p>
        </div>
        <label className={styles.upload} htmlFor="upload-photo">
          {!fileInfo ? (
            <div className="flex flex-col justify-center text-center items-center">
              <UploadCloudIcon size={32} color="#a1a1a1" absoluteStrokeWidth />
              <p>Выберите файл PNG</p>
            </div>
          ) : (
            <div className={styles.file_info}>
              {fileInfo.name}
              <div className={styles.size}>{fileInfo.size}</div>
            </div>
          )}
        </label>
        <input
          type="file"
          name="photo"
          id="upload-photo"
          className={styles.input_file}
          onChange={handleFileChange}
          accept=".png"
          ref={inputRef}
        />
      </div>
      {fileInfo && (
        <div className={styles.title_skin}>
          <button className={styles.cancel} onClick={clearFile}>Отменить</button>
          <button className={styles.apply} onClick={uploadSkin} disabled={isLoading}>
            {isLoading ? (
            <>
              <ThreeDots width={32} height={32} color='#000' />
            </> 
            )
            : `Применить ${message}`}
          </button>
        </div>
      )}
    </div>
  );
};
