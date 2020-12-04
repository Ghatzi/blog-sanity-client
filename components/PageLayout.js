import { Container } from 'react-bootstrap';
import BlogNavbar from 'components/Navbar';
import Footer from 'components/Footer';
import { useTheme } from 'providers/ThemeProvider';

const PageLayout = ({ children, className }) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={theme.type}>
      <Container>
        <BlogNavbar theme={theme} toggleTheme={toggleTheme} />
        <div className={`page-wrapper ${className}`}>{children}</div>
        <Footer />
      </Container>
      <style jsx global>{`
        html,
        body {
          background: ${theme.background};
          color: ${theme.fontColor};
          transition: color 0.2s ease-out 0s, background 0.2s ease-out 0s;
        }
      `}</style>
    </div>
  );
};

export default PageLayout;
