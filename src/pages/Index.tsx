
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-background to-primary/5">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Стань лучше в CS2
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Подробные гайды, тактики и фишки для новичков и опытных игроков Counter-Strike 2
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link to="/maps">Карты и позиции</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/team-tactics">Командные тактики</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Что вы найдете на нашем сайте</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-card hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle>Тактики на картах</CardTitle>
                <CardDescription>Подробные гайды для всех официальных карт</CardDescription>
              </CardHeader>
              <CardContent>
                <img 
                  src="https://images.unsplash.com/photo-1592036555774-99e2fe4c8751?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="CS2 карты" 
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <p className="text-muted-foreground">
                  Изучите лучшие позиции, углы для стрельбы и тактические точки на всех картах CS2.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/maps">Смотреть карты</Link>
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="bg-card hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle>Командные тактики</CardTitle>
                <CardDescription>Стратегии для слаженной игры в команде</CardDescription>
              </CardHeader>
              <CardContent>
                <img 
                  src="https://images.unsplash.com/photo-1511882150382-421056c89033?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Командная игра" 
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <p className="text-muted-foreground">
                  Эффективные стратегии для команд любого уровня, от простых сетапов до продвинутых экзекьютов.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/team-tactics">Командные тактики</Link>
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="bg-card hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Соло фишки</CardTitle>
                  <Badge className="bg-accent text-white">Новое</Badge>
                </div>
                <CardDescription>Полезные фишки для индивидуальной игры</CardDescription>
              </CardHeader>
              <CardContent>
                <img 
                  src="https://images.unsplash.com/photo-1627853257933-9706a2220137?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Соло фишки" 
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <p className="text-muted-foreground">
                  Трюки, советы и хитрости для улучшения индивидуального мастерства в любой ситуации.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/solo-tips">Соло фишки</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-accent/5">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Готовы повысить свое мастерство?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Изучите наши подробные гайды, освойте новые тактики и станьте лучшим игроком CS2.
          </p>
          <Button size="lg" asChild>
            <Link to="/maps">Начать обучение</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
