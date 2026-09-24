import React, { useEffect, useRef, useState } from 'react';
import { User } from '../types/User';
import classNames from 'classnames';

type Props = {
  users: User[];
  selectedUser: User | null;
  onSelect: (user: User) => void;
};

export const UserSelector: React.FC<Props> = ({
  users,
  selectedUser,
  onSelect,
}) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const selectorRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutsideSelector = (event: PointerEvent) => {
      if (event.target instanceof Node) {
        if (selectorRef.current) {
          if (!selectorRef.current.contains(event.target)) {
            setIsDropdownVisible(false);
          }
        }
      }
    };

    document.addEventListener('pointerdown', handleClickOutsideSelector);

    return () => {
      document.removeEventListener('pointerdown', handleClickOutsideSelector);
    };
  }, []);

  return (
    <div
      data-cy="UserSelector"
      className={classNames('dropdown', { 'is-active': isDropdownVisible })}
    >
      <div className="dropdown-trigger">
        <button
          type="button"
          className="button"
          aria-haspopup="true"
          aria-controls="dropdown-menu"
          onPointerDown={() => {
            setIsDropdownVisible(!isDropdownVisible);
          }}
          ref={selectorRef}
        >
          <span>{selectedUser ? selectedUser.name : 'Choose a user'}</span>

          <span className="icon is-small">
            <i className="fas fa-angle-down" aria-hidden="true" />
          </span>
        </button>
      </div>

      <div className="dropdown-menu" id="dropdown-menu" role="menu">
        <div className="dropdown-content">
          {users.map(user => {
            return (
              <a
                href={`#user-${user.id}`}
                className={classNames('dropdown-item', {
                  'is-active': selectedUser?.id === user.id,
                })}
                key={user.id}
                onPointerDown={event => {
                  event.preventDefault();
                  setIsDropdownVisible(false);
                  onSelect(user);
                }}
              >
                {user.name}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};
