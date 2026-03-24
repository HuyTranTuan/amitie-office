import { Outlet } from 'react-router-dom'

import styles from './AuthLayouts.module.scss'

export default function AuthLayouts() {
  return (
    <div style={{ minHeight: '100vh', display: 'grid', placeItems: 'center' }}>
      <div style={{ width: 'min(520px, 92vw)' }}>
        <Outlet />
      </div>
    </div>
  )
}

