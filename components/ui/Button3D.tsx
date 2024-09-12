import { Ionicons } from '@expo/vector-icons';
import React, { forwardRef } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

interface Button3DProps {
  text: string;
  number?: number;
  onPress: () => void;
  variant?: 'default' | 'primary' | 'secondary';
  withIcon?: keyof typeof Ionicons.glyphMap;
}

const Button3D = forwardRef<any, Button3DProps>(
  ({ text, number, onPress, variant = 'default', withIcon }, ref) => {
    const getStyles = () => {
      switch (variant) {
        case 'primary':
          return {
            container:
              'border-b-8 border-x-[#0056b3] border-b-[#0056b3] bg-[#007bff] shadow-lg shadow-[#003d80]',
            text: 'text-[#ffffff]',
            numberContainer: 'bg-[#ffffff]',
            numberText: 'text-[#007bff]',
          };
        case 'secondary':
          return {
            container:
              'border-b-8 border-x-[#494f52] border-b-[#494f52] bg-[#6c757d] shadow-lg shadow-[#3a3e41]',
            text: 'text-[#ffffff]',
            numberContainer: 'bg-[#ffffff]',
            numberText: 'text-[#6c757d]',
          };
        default:
          return {
            container:
              'border-b-8 border-x-[#e2ac8b] border-b-[#e2ac8b] bg-[#F8D3AB] shadow-lg shadow-[#000]',
            text: 'text-[#8B4C39]',
            numberContainer: 'bg-[#8B4C39]',
            numberText: 'text-[#F8D3AB]',
          };
      }
    };

    const styles = getStyles();

    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => onPress()}
        className="transition-transform duration-100 active:translate-y-2">
        <View
          className={`flex-row items-center justify-between rounded-full border-2 border-t-0 px-6 py-5 shadow-lg ${styles.container}`}>
          {withIcon ? (
            <Ionicons name={withIcon} size={20} color="#fff" />
          ) : (
            <Text className={`mr-2 text-xl font-bold ${styles.text}`}>{text}</Text>
          )}

          {number !== undefined && (
            <View
              className={`h-8 w-8 items-center justify-center rounded-full ${styles.numberContainer}`}>
              <Text className={`text-lg font-bold ${styles.numberText}`}>{number}</Text>
            </View>
          )}
        </View>
      </TouchableOpacity>
    );
  }
);

export default Button3D;
