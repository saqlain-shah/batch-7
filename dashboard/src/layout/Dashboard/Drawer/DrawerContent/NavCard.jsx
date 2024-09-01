// material-ui
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// project-imports
import MainCard from 'components/MainCard';
import AnimateButton from 'components/@extended/AnimateButton';

// assets
import { Logout } from 'iconsax-react';
import avatar from 'assets/images/analytics/welcome-banner.png';

// ==============================|| DRAWER CONTENT - NAV CARD ||============================== //

export default function NavCard() {
  return (
    <MainCard sx={{ bgcolor: 'secondary.lighter', m: 3 }}>
      <Stack alignItems="center" spacing={2.5}>
        <Stack alignItems="center">
          <Typography variant="h6" color="secondary">
            Developed By
          </Typography>
          <Typography variant="h5">NetBots</Typography>
        </Stack>
      </Stack>
    </MainCard>
  );
}
