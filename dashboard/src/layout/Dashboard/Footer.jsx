/* eslint-disable prettier/prettier */
import { Link as RouterLink } from 'react-router-dom';

// material-ui
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// ==============================|| MAIN LAYOUT - FOOTER ||============================== //

export default function Footer() {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ p: '24px 16px 0px', mt: 'auto' }}>
      <Typography variant="caption">
        &copy; Yousuf Hussain Abadi Meusum Admin-Dashboard ♥ crafted by{' '}
        <Link component={RouterLink} to="https://netbots.tech/" target="_blank" variant="caption" color="text.primary">
          {' '}
          Team NetBots
        </Link>
      </Typography>
    </Stack>
  );
}
