
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t bg-card">
      <div className="container py-8 px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">CS2 Гайды</h3>
            <p className="text-muted-foreground">
              Лучшие тактики и фишки для новичков и опытных игроков Counter-Strike 2
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Разделы</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/maps" className="text-muted-foreground hover:text-primary transition-colors">
                  Карты
                </Link>
              </li>
              <li>
                <Link to="/team-tactics" className="text-muted-foreground hover:text-primary transition-colors">
                  Командные тактики
                </Link>
              </li>
              <li>
                <Link to="/solo-tips" className="text-muted-foreground hover:text-primary transition-colors">
                  Соло фишки
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <p className="text-muted-foreground">
              Есть вопросы или предложения? <br />
              Напишите нам на почту: info@cs2guides.ru
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} CS2 Гайды. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
