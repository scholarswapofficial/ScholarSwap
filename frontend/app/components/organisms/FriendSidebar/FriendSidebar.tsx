"use client";

import { FRIEND_SIDEBAR } from "@/constant/feed/friend";

import FriendSidebarItem from "@/components/molecules/FriendSidebarItem/FriendSidebarItem";

import styles from "@/styles/sections/feed/friend.module.scss";

import { FiChevronRight } from "react-icons/fi";

const FriendSidebar = () => {
  return (
    <div
      className={
        styles["friend-sidebar"]
      }
    >
      {/* MENU */}
      <div
        className={
          styles["friend-sidebar__menu"]
        }
      >
        <h4
          className={
            styles["menu-title"]
          }
        >
          Explore
        </h4>

        {FRIEND_SIDEBAR.map(
          (item) => (
            <div
              key={item.id}
              className={
                styles[
                  "menu-item-wrapper"
                ]
              }
            >
              <FriendSidebarItem
                item={item}
              />

              <FiChevronRight
                className={
                  styles["chevron"]
                }
              />
            </div>
          )
        )}
      </div>

      {/* AD */}
      <div
        className={
          styles["friend-ad"]
        }
      >
        <h4>Sponsored</h4>

        <div
          className={
            styles[
              "friend-ad__content"
            ]
          }
        >
          <div
            className={
              styles["ad-icon"]
            }
          >
            🛒
          </div>

          <div
            className={
              styles["ad-text"]
            }
          >
            <p>
              Easy online shopping
            </p>

            <span>
              Save big on items
              across categories
            </span>
          </div>

          <button
            className={
              styles["ad-btn"]
            }
          >
            Shop Now →
          </button>
        </div>
      </div>
    </div>
  );
};

export default FriendSidebar;