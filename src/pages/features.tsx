import { LockIcon, ZapIcon, CodeIcon, ShieldIcon } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: LockIcon,
      title: 'Enterprise Security',
      description:
        'Multi-factor authentication with industry-leading encryption standards',
    },
    {
      icon: ZapIcon,
      title: 'Lightning Fast',
      description: 'Sub-millisecond response times for authentication requests',
    },
    {
      icon: CodeIcon,
      title: 'Easy Integration',
      description: 'Simple APIs and SDKs with comprehensive documentation',
    },
    {
      icon: ShieldIcon,
      title: '99.99% Uptime',
      description: 'Enterprise-grade infrastructure with automatic failover',
    },
  ];

  return (
    <section className="py-24 px-4 border-t border-white/10 bg-black border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Built for developers.
            <br />
            <span className="text-white/60">Trusted by enterprises.</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Everything you need to build secure authentication experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl border border-white/10 hover:border-white/30 hover:bg-white/5 smooth-transition cursor-pointer"
              >
                <div className="inline-block p-3 rounded-xl bg-white/10 group-hover:bg-white/20 smooth-transition mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">
                  {feature.title}
                </h3>
                <p className="text-white/60 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
