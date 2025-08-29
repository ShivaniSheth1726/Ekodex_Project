// material-ui
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function Footer() {
  return (
    <Stack
      direction="row"
      sx={{
        alignItems: 'center',
        justifyContent: 'space-between',
        p: '24px 16px 0px',
        mt: 'auto',
        borderTop: '1px solid #e0e0e0' // optional: top border
      }}
    >
      <Typography variant="caption">
        © {new Date().getFullYear()} All rights reserved by{' '}
        <Link href="https://yourwebsite.com" target="_blank" underline="hover">
          YourCompany
        </Link>
      </Typography>

      <Stack
        direction="row"
        sx={{ gap: 1.5, alignItems: 'center', justifyContent: 'space-between' }}
      >
        <Typography variant="caption">
          Designed & Developed by{' '}
          <Link href="https://yourportfolio.com" target="_blank" underline="hover">
            Shivani
          </Link>
        </Typography>
      </Stack>
    </Stack>
  );
}
