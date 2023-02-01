'use client';

import { Menu } from '@headlessui/react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

interface ProductsDropdownProps {
  title: string;
  description: string;
}

export const ProductsDropdown = ({
  title,
  description,
}: ProductsDropdownProps) => {
  return (
    <Menu>
      {({ open }) => (
        <>
          <Menu.Button className="flex w-full items-center justify-between pr-4">
            <h2 className="text-lg">{title}</h2>
            {!open ? <AiOutlinePlus /> : <AiOutlineMinus />}
          </Menu.Button>
          <Menu.Items>
            <Menu.Item disabled>
              <p className="mt-auto text-sm">{description}</p>
            </Menu.Item>
          </Menu.Items>
        </>
      )}
    </Menu>
  );
};
