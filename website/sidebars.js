module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Introduction',
      collapsed: true,
      items: [
        'intro',
      ]
    },
    {
      type: 'category',
      label: 'Validation',
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'General',
          collapsed: true,
          items: [
            'validation/allowedrepos',

            'validation/automount-serviceaccount-token',

            'validation/block-endpoint-edit-default-role',

            'validation/block-loadbalancer-services',

            'validation/block-nodeport-services',

            'validation/block-wildcard-ingress',

            'validation/containerlimits',

            'validation/containerrequests',

            'validation/containerresourceratios',

            'validation/containerresources',

            'validation/disallowanonymous',

            'validation/disallowedrepos',

            'validation/disallowedtags',

            'validation/ephemeralstoragelimit',

            'validation/externalip',

            'validation/horizontalpodautoscaler',

            'validation/httpsonly',

            'validation/imagedigests',

            'validation/noupdateserviceaccount',

            'validation/poddisruptionbudget',

            'validation/replicalimits',

            'validation/requiredannotations',

            'validation/requiredlabels',

            'validation/requiredprobes',

            'validation/storageclass',

            'validation/uniqueingresshost',

            'validation/uniqueserviceselector',

            'validation/verifydeprecatedapi',
          ],
        },
        {
          type: 'category',
          label: 'Pod Security Policy',
          collapsed: true,
          items: [
            'pspintro',

            'validation/allow-privilege-escalation',

            'validation/apparmor',

            'validation/capabilities',

            'validation/flexvolume-drivers',

            'validation/forbidden-sysctls',

            'validation/fsgroup',

            'validation/host-filesystem',

            'validation/host-namespaces',

            'validation/host-network-ports',

            'validation/privileged-containers',

            'validation/proc-mount',

            'validation/read-only-root-filesystem',

            'validation/seccomp',

            'validation/selinux',

            'validation/users',

            'validation/volumes',
          ],
        },
      ]
    },
    {
      type: 'category',
      label: 'Mutation',
      collapsed: true,
      items: [
        'mutation-examples/allow-privilege-escalation',

        'mutation-examples/capabilities',

        'mutation-examples/read-only-root-filesystem',

        'mutation-examples/seccomp',

        'mutation-examples/selinux',

        'mutation-examples/users',
      ]
    },
  ],
};
