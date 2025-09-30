import { Link } from "react-router-dom";
import Calculator from "../../sections/Calculator";
import CircuitBackground from "../../ui/CircuitBackground";

export default function CalculatorPage() {
  return (
    <div className="bg-kindofwhite min-h-screen relative">
      <CircuitBackground />

      <div className="relative z-10 container mx-auto px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-domine font-black text-sexyblue mb-4">
            Calculator Challenge
          </h1>
          <p className="text-lg text-sexyblue/80 font-domine">
            Test your math skills with our interactive calculator
          </p>
        </div>
        {/* Navigation */}
        <div className="mb-8 flex gap-4">
          <Link
            to="/"
            className="inline-flex items-center text-sexyblue hover:text-sexyblue/80 transition-colors font-domine">
            ← Back to Home
          </Link>
          <Link
            to="/cv"
            className="inline-flex items-center text-sexyblue hover:text-sexyblue/80 transition-colors font-domine">
            📄 View CV
          </Link>
        </div>{" "}
        {/* Calculator Component */}
        <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
          <Calculator />
        </div>
      </div>
    </div>
  );
}
