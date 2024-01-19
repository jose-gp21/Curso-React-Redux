import '@fortawesome/fontawesome-free/css/all.min.css';
import { FC } from 'react';
import React from 'react';
import AppButton from './AppButton';

interface Props {
    title?: string;
    description?: string;
    onEditClick?(): void;
    onDeleteClick?(): void;
    onViewClick?(): void;
  }
  
  const NoteItem: FC<Props> = ({
    title,
    description,
    onEditClick,
    onDeleteClick,
    onViewClick,
  }) => {
  
    return (
        <div className="bg-white shadow-md rounded p-5 m-10 block">
            <div className="flex items-center justify-between">
                {/* Use the title prop here */}
                <p className="font-semibold text-gray-400 text-lg">{title}</p>
                <div className="flex space-x-4">
                    <AppButton color="green-500" icon="eye" onClick={onViewClick} />
                    <AppButton color="gray-400" icon="edit" onClick={onEditClick} />
                    <AppButton color="red-500" icon="trash" onClick={onDeleteClick} />

                </div>
            </div>
        </div>
    );
};

export default NoteItem;