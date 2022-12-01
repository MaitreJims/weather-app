import { FC, useRef } from 'react';
import { Search } from '@mui/icons-material';
import { IconButton, InputBase, Paper, SxProps, Theme } from '@mui/material';
import { motion } from 'framer-motion';

export interface CityInputProps {
  placeholder?: string;
  onSubmit?: (value: string) => void;
  sx?: SxProps<Theme>;
}

const CityInput: FC<CityInputProps> = ({ placeholder, onSubmit, sx = {} }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: 'easeOut',
      }}
    >
      <Paper
        sx={(theme) => ({
          p: '2px 4px',
          display: 'flex',
          alignItems: 'center',
          width: 'clamp(0px, 300px, 90vw)',
          ...(typeof sx === 'function' ? (sx as any)(theme) : sx),
        })}
      >
        <IconButton
          sx={{ p: '10px' }}
          onClick={() => {
            if (!inputRef.current) return;
            onSubmit?.(inputRef.current.value);
            inputRef.current.value = '';
          }}
          aria-label="search"
        >
          <Search />
        </IconButton>
        <InputBase
          inputRef={inputRef}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              onSubmit?.(e.currentTarget.value);
              if (!inputRef.current) return;
              inputRef.current.value = '';
            }
          }}
          placeholder={placeholder}
        />
      </Paper>
    </motion.div>
  );
};

export default CityInput;
