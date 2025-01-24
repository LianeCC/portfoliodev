import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="py-8">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-semibold">Contactez-moi par <Link href={""}><Mail size={24} className="text-blue-500" />mail</Link></h2>
        <div className="text-center mb-8">
          <a
            href="#"
            download
            className="inline-block bg-primary/50 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Télécharger mon CV
          </a>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-4">Formulaire de Contact</h3>
          <form
            action="#"
            method="POST"
            className="max-w-lg mx-auto space-y-4 bg-gray-800 p-6 rounded-lg"
          >
            <div>
              <Label htmlFor="name">Votre nom</Label>
              <Input id="name" name="name" placeholder="Entrez votre nom" className="mt-2" required />
            </div>

            <div>
              <Label htmlFor="email">Votre email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Entrez votre email"
                className="mt-2"
                required
              />
            </div>

            <div>
              <Label htmlFor="message">Votre message</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Écrivez votre message"
                className="mt-2"
                rows={4}
                required
              />
            </div>

            <Button type="submit" className="w-full mt-4 bg-blue-600 hover:bg-blue-700 transition">
              Envoyer
            </Button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
